/* eslint-disable no-multi-assign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable default-case */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable func-names */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */
import * as THREE from 'three-full';

export default function particle(count, mDuration, sceneHeight, sceneWidth) {
  let prefabGeometry = new THREE.PlaneGeometry(3, 3);
  if (sceneWidth < 680 && sceneHeight < 800) {
    prefabGeometry = new THREE.PlaneGeometry(4, 4);
  }
  const bufferGeometry = new THREE.BAS.PrefabBufferGeometry(
    prefabGeometry,
    count,
  );

  bufferGeometry.computeVertexNormals();

  // generate additional geometry data
  const aOffset = bufferGeometry.createAttribute('aOffset', 1);
  const aStartPosition = bufferGeometry.createAttribute('aStartPosition', 3);
  const aControlPoint1 = bufferGeometry.createAttribute('aControlPoint1', 3);
  const aControlPoint2 = bufferGeometry.createAttribute('aControlPoint2', 3);
  const aEndPosition = bufferGeometry.createAttribute('aEndPosition', 3);
  const aAxisAngle = bufferGeometry.createAttribute('aAxisAngle', 4);
  const aColor = bufferGeometry.createAttribute('color', 3);

  const RandFloat = function(low, high) {
    return low + Math.random() * (high - low);
  };

  const RandFloatSpread = function(range) {
    return range * (0.5 - Math.random());
  };

  let i;
  let j;
  let offset;

  // buffer time offset
  let delay;

  for (i = 0, offset = 0; i < count; i++) {
    delay = (i / count) * mDuration;

    for (j = 0; j < prefabGeometry.vertices.length; j++) {
      aOffset.array[offset++] = delay;
    }
  }

  // buffer start positions
  let x;
  let y;
  let z;

  for (i = 0, offset = 0; i < count; i++) {
    x = -2000;
    y = 0;
    z = 0;

    for (j = 0; j < prefabGeometry.vertices.length; j++) {
      aStartPosition.array[offset++] = x;
      aStartPosition.array[offset++] = y;
      aStartPosition.array[offset++] = z;
    }
  }

  // buffer control points
  for (i = 0, offset = 0; i < count; i++) {
    x = RandFloat(-400, 400);
    y = RandFloat(500, 600);
    z = RandFloat(-8000, -100);

    for (j = 0; j < prefabGeometry.vertices.length; j++) {
      aControlPoint1.array[offset++] = x;
      aControlPoint1.array[offset++] = y;
      aControlPoint1.array[offset++] = z;
    }
  }

  for (i = 0, offset = 0; i < count; i++) {
    x = RandFloat(-1000, 1000);
    y = RandFloat(-1200, 1200);
    z = RandFloat(100, 800);

    for (j = 0; j < prefabGeometry.vertices.length; j++) {
      aControlPoint2.array[offset++] = x;
      aControlPoint2.array[offset++] = y;
      aControlPoint2.array[offset++] = z;
    }
  }

  // buffer end positions

  for (i = 0, offset = 0; i < count; i++) {
    x = 1000;
    y = 0;
    z = 0;

    for (j = 0; j < prefabGeometry.vertices.length; j++) {
      aEndPosition.array[offset++] = x;
      aEndPosition.array[offset++] = y;
      aEndPosition.array[offset++] = z;
    }
  }

  // buffer axis angle
  const axis = new THREE.Vector3();
  let angle = 0;

  for (i = 0, offset = 0; i < count; i++) {
    axis.x = RandFloatSpread(2);
    axis.y = RandFloatSpread(2);
    axis.z = RandFloatSpread(2);
    axis.normalize();

    angle = Math.PI * (16 + Math.floor(Math.random() * (32 - 16 + 1)));

    for (j = 0; j < prefabGeometry.vertices.length; j++) {
      aAxisAngle.array[offset++] = axis.x;
      aAxisAngle.array[offset++] = axis.y;
      aAxisAngle.array[offset++] = axis.z;
      aAxisAngle.array[offset++] = angle;
    }
  }

  // buffer color
  const color = new THREE.Color();
  let h;
  let s;
  let l;

  for (i = 0, offset = 0; i < count; i++) {
    h = i / count;
    s = RandFloat(0.2, 0.6);
    l = RandFloat(0.2, 0.7);

    color.setHSL(h, s, l);

    for (j = 0; j < prefabGeometry.vertices.length; j++) {
      aColor.array[offset++] = color.r;
      aColor.array[offset++] = color.g;
      aColor.array[offset++] = color.b;
    }
  }

  const material = new THREE.BAS.PhongAnimationMaterial(
    // custom parameters & THREE.MeshPhongMaterial parameters
    {
      vertexColors: THREE.VertexColors,
      shading: THREE.FlatShading,
      side: THREE.DoubleSide,
      uniforms: {
        uTime: { type: 'f', value: 0 },
        uDuration: { type: 'f', value: mDuration },
      },
      shaderFunctions: [
        THREE.BAS.ShaderChunk.quaternion_rotation,
        THREE.BAS.ShaderChunk.cubic_bezier,
      ],
      shaderParameters: [
        'uniform float uTime;',
        'uniform float uDuration;',
        'attribute float aOffset;',
        'attribute vec3 aStartPosition;',
        'attribute vec3 aControlPoint1;',
        'attribute vec3 aControlPoint2;',
        'attribute vec3 aEndPosition;',
        'attribute vec4 aAxisAngle;',
      ],
      shaderVertexInit: [
        'float tProgress = mod((uTime + aOffset), uDuration) / uDuration;',

        'float angle = aAxisAngle.w * tProgress;',
        'vec4 tQuat = quatFromAxisAngle(aAxisAngle.xyz, angle);',
      ],
      shaderTransformNormal: [
        'objectNormal = rotateVector(tQuat, objectNormal);',
      ],
      shaderTransformPosition: [
        'transformed = rotateVector(tQuat, transformed);',
        'transformed += cubicBezier(aStartPosition, aControlPoint1, aControlPoint2, aEndPosition, tProgress);',
      ],
    },
    // THREE.MeshPhongMaterial uniforms
    {
      specular: 0xff0000,
      shininess: 20,
    },
  );

  return new THREE.Mesh(bufferGeometry, material);
}

THREE.BAS = {};

THREE.BAS.ShaderChunk = {};

THREE.BAS.ShaderChunk.animation_time =
  'float tDelay = aAnimation.x;\nfloat tDuration = aAnimation.y;\nfloat tTime = clamp(uTime - tDelay, 0.0, tDuration);\nfloat tProgress = ease(tTime, 0.0, 1.0, tDuration);\n';

THREE.BAS.ShaderChunk.cubic_bezier =
  'vec3 cubicBezier(vec3 p0, vec3 c0, vec3 c1, vec3 p1, float t)\n{\n    vec3 tp;\n    float tn = 1.0 - t;\n\n    tp.xyz = tn * tn * tn * p0.xyz + 3.0 * tn * tn * t * c0.xyz + 3.0 * tn * t * t * c1.xyz + t * t * t * p1.xyz;\n\n    return tp;\n}\n';

THREE.BAS.ShaderChunk.ease_in_cubic =
  'float ease(float t, float b, float c, float d) {\n  return c*(t/=d)*t*t + b;\n}\n';

THREE.BAS.ShaderChunk.ease_in_quad =
  'float ease(float t, float b, float c, float d) {\n  return c*(t/=d)*t + b;\n}\n';

THREE.BAS.ShaderChunk.ease_out_cubic =
  'float ease(float t, float b, float c, float d) {\n  return c*((t=t/d - 1.0)*t*t + 1.0) + b;\n}\n';

THREE.BAS.ShaderChunk.quaternion_rotation =
  'vec3 rotateVector(vec4 q, vec3 v)\n{\n    return v + 2.0 * cross(q.xyz, cross(q.xyz, v) + q.w * v);\n}\n\nvec4 quatFromAxisAngle(vec3 axis, float angle)\n{\n    float halfAngle = angle * 0.5;\n    return vec4(axis.xyz * sin(halfAngle), cos(halfAngle));\n}\n';

THREE.BAS.PrefabBufferGeometry = function(prefab, count) {
  THREE.BufferGeometry.call(this);

  this.prefabGeometry = prefab;
  this.prefabCount = count;
  this.prefabVertexCount = prefab.vertices.length;

  this.bufferDefaults();
};
THREE.BAS.PrefabBufferGeometry.prototype = Object.create(
  THREE.BufferGeometry.prototype,
);
THREE.BAS.PrefabBufferGeometry.prototype.constructor =
  THREE.BAS.PrefabBufferGeometry;

THREE.BAS.PrefabBufferGeometry.prototype.bufferDefaults = function() {
  const prefabFaceCount = this.prefabGeometry.faces.length;
  const prefabIndexCount = this.prefabGeometry.faces.length * 3;
  const prefabVertexCount = (this.prefabVertexCount = this.prefabGeometry.vertices.length);
  const prefabIndices = [];

  for (let h = 0; h < prefabFaceCount; h++) {
    const face = this.prefabGeometry.faces[h];
    prefabIndices.push(face.a, face.b, face.c);
  }

  const indexBuffer = new Uint32Array(this.prefabCount * prefabIndexCount);
  const positionBuffer = new Float32Array(
    this.prefabCount * prefabVertexCount * 3,
  );

  this.setIndex(new THREE.BufferAttribute(indexBuffer, 1));
  this.addAttribute('position', new THREE.BufferAttribute(positionBuffer, 3));

  for (let i = 0, offset = 0; i < this.prefabCount; i++) {
    for (let j = 0; j < prefabVertexCount; j++, offset += 3) {
      const prefabVertex = this.prefabGeometry.vertices[j];

      positionBuffer[offset] = prefabVertex.x;
      positionBuffer[offset + 1] = prefabVertex.y;
      positionBuffer[offset + 2] = prefabVertex.z;
    }

    for (let k = 0; k < prefabIndexCount; k++) {
      indexBuffer[i * prefabIndexCount + k] =
        prefabIndices[k] + i * prefabVertexCount;
    }
  }
};

// todo test
THREE.BAS.PrefabBufferGeometry.prototype.bufferUvs = function() {
  const prefabFaceCount = this.prefabGeometry.faces.length;
  const prefabVertexCount = (this.prefabVertexCount = this.prefabGeometry.vertices.length);
  const prefabUvs = [];

  for (let h = 0; h < prefabFaceCount; h++) {
    const face = this.prefabGeometry.faces[h];
    const uv = this.prefabGeometry.faceVertexUvs[0][h];

    prefabUvs[face.a] = uv[0];
    prefabUvs[face.b] = uv[1];
    prefabUvs[face.c] = uv[2];
  }

  const uvBuffer = this.createAttribute('uv', 2);

  for (let i = 0, offset = 0; i < this.prefabCount; i++) {
    for (let j = 0; j < prefabVertexCount; j++, offset += 2) {
      const prefabUv = prefabUvs[j];

      uvBuffer.array[offset] = prefabUv.x;
      uvBuffer.array[offset + 1] = prefabUv.y;
    }
  }
};

/**
 * based on BufferGeometry.computeVertexNormals
 * calculate vertex normals for a prefab, and repeat the data in the normal buffer
 */
THREE.BAS.PrefabBufferGeometry.prototype.computeVertexNormals = function() {
  const index = this.index;
  const attributes = this.attributes;
  const positions = attributes.position.array;

  if (attributes.normal === undefined) {
    this.addAttribute(
      'normal',
      new THREE.BufferAttribute(new Float32Array(positions.length), 3),
    );
  }

  const normals = attributes.normal.array;

  let vA;
  let vB;
  let vC;

  const pA = new THREE.Vector3();

  const pB = new THREE.Vector3();

  const pC = new THREE.Vector3();

  const cb = new THREE.Vector3();

  const ab = new THREE.Vector3();

  const indices = index.array;
  const prefabIndexCount = this.prefabGeometry.faces.length * 3;

  for (let i = 0; i < prefabIndexCount; i += 3) {
    vA = indices[i + 0] * 3;
    vB = indices[i + 1] * 3;
    vC = indices[i + 2] * 3;

    pA.fromArray(positions, vA);
    pB.fromArray(positions, vB);
    pC.fromArray(positions, vC);

    cb.subVectors(pC, pB);
    ab.subVectors(pA, pB);
    cb.cross(ab);

    normals[vA] += cb.x;
    normals[vA + 1] += cb.y;
    normals[vA + 2] += cb.z;

    normals[vB] += cb.x;
    normals[vB + 1] += cb.y;
    normals[vB + 2] += cb.z;

    normals[vC] += cb.x;
    normals[vC + 1] += cb.y;
    normals[vC + 2] += cb.z;
  }

  for (let j = 1; j < this.prefabCount; j++) {
    for (let k = 0; k < prefabIndexCount; k++) {
      normals[j * prefabIndexCount + k] = normals[k];
    }
  }

  this.normalizeNormals();

  attributes.normal.needsUpdate = true;
};

THREE.BAS.PrefabBufferGeometry.prototype.createAttribute = function(
  name,
  itemSize,
) {
  const buffer = new Float32Array(
    this.prefabCount * this.prefabVertexCount * itemSize,
  );
  const attribute = new THREE.BufferAttribute(buffer, itemSize);

  this.addAttribute(name, attribute);

  return attribute;
};

THREE.BAS.PrefabBufferGeometry.prototype.setAttribute4 = function(name, data) {
  let offset = 0;
  const array = this.geometry.attributes[name].array;
  let i;
  let j;

  for (i = 0; i < data.length; i++) {
    const v = data[i];

    for (j = 0; j < this.prefabVertexCount; j++) {
      array[offset++] = v.x;
      array[offset++] = v.y;
      array[offset++] = v.z;
      array[offset++] = v.w;
    }
  }

  this.geometry.attributes[name].needsUpdate = true;
};
THREE.BAS.PrefabBufferGeometry.prototype.setAttribute3 = function(name, data) {
  let offset = 0;
  const array = this.geometry.attributes[name].array;
  let i;
  let j;

  for (i = 0; i < data.length; i++) {
    const v = data[i];

    for (j = 0; j < this.prefabVertexCount; j++) {
      array[offset++] = v.x;
      array[offset++] = v.y;
      array[offset++] = v.z;
    }
  }

  this.geometry.attributes[name].needsUpdate = true;
};
THREE.BAS.PrefabBufferGeometry.prototype.setAttribute2 = function(name, data) {
  let offset = 0;
  const array = this.geometry.attributes[name].array;
  let i;
  let j;

  for (i = 0; i < this.prefabCount; i++) {
    const v = data[i];

    for (j = 0; j < this.prefabVertexCount; j++) {
      array[offset++] = v.x;
      array[offset++] = v.y;
    }
  }

  this.geometry.attributes[name].needsUpdate = true;
};

THREE.BAS.BaseAnimationMaterial = function(parameters) {
  THREE.ShaderMaterial.call(this);

  this.shaderFunctions = [];
  this.shaderParameters = [];
  this.shaderVertexInit = [];
  this.shaderTransformNormal = [];
  this.shaderTransformPosition = [];

  this.setValues(parameters);
};
THREE.BAS.BaseAnimationMaterial.prototype = Object.create(
  THREE.ShaderMaterial.prototype,
);
THREE.BAS.BaseAnimationMaterial.prototype.constructor =
  THREE.BAS.BaseAnimationMaterial;

// abstract
THREE.BAS.BaseAnimationMaterial.prototype._concatVertexShader = function() {
  return '';
};

THREE.BAS.BaseAnimationMaterial.prototype._concatFunctions = function() {
  return this.shaderFunctions.join('\n');
};
THREE.BAS.BaseAnimationMaterial.prototype._concatParameters = function() {
  return this.shaderParameters.join('\n');
};
THREE.BAS.BaseAnimationMaterial.prototype._concatVertexInit = function() {
  return this.shaderVertexInit.join('\n');
};
THREE.BAS.BaseAnimationMaterial.prototype._concatTransformNormal = function() {
  return this.shaderTransformNormal.join('\n');
};
THREE.BAS.BaseAnimationMaterial.prototype._concatTransformPosition = function() {
  return this.shaderTransformPosition.join('\n');
};

THREE.BAS.BaseAnimationMaterial.prototype.setUniformValues = function(values) {
  for (const key in values) {
    if (key in this.uniforms) {
      const uniform = this.uniforms[key];
      const value = values[key];

      // todo add matrix uniform types
      switch (uniform.type) {
        case 'c': // color
          uniform.value.set(value);
          break;
        case 'v2': // vectors
        case 'v3':
        case 'v4':
          uniform.value.copy(value);
          break;
        case 'f': // float
        case 't': // texture
          uniform.value = value;
      }
    }
  }
};

THREE.BAS.PhongAnimationMaterial = function(parameters, uniformValues) {
  THREE.BAS.BaseAnimationMaterial.call(this, parameters);

  const phongShader = THREE.ShaderLib.phong;

  this.uniforms = THREE.UniformsUtils.merge([
    phongShader.uniforms,
    this.uniforms,
  ]);
  this.lights = true;
  this.vertexShader = this._concatVertexShader();
  this.fragmentShader = phongShader.fragmentShader;

  // todo add missing default defines
  uniformValues.map && (this.defines.USE_MAP = '');
  uniformValues.normalMap && (this.defines.USE_NORMALMAP = '');

  this.setUniformValues(uniformValues);
};
THREE.BAS.PhongAnimationMaterial.prototype = Object.create(
  THREE.BAS.BaseAnimationMaterial.prototype,
);
THREE.BAS.PhongAnimationMaterial.prototype.constructor =
  THREE.BAS.PhongAnimationMaterial;

THREE.BAS.PhongAnimationMaterial.prototype._concatVertexShader = function() {
  // based on THREE.ShaderLib.phong
  return [
    '#define PHONG',

    'varying vec3 vViewPosition;',

    '#ifndef FLAT_SHADED',

    '	varying vec3 vNormal;',

    '#endif',

    THREE.ShaderChunk.common,
    THREE.ShaderChunk.uv_pars_vertex,
    THREE.ShaderChunk.uv2_pars_vertex,
    THREE.ShaderChunk.displacementmap_pars_vertex,
    THREE.ShaderChunk.envmap_pars_vertex,
    THREE.ShaderChunk.lights_phong_pars_vertex,
    THREE.ShaderChunk.color_pars_vertex,
    THREE.ShaderChunk.morphtarget_pars_vertex,
    THREE.ShaderChunk.skinning_pars_vertex,
    THREE.ShaderChunk.shadowmap_pars_vertex,
    THREE.ShaderChunk.logdepthbuf_pars_vertex,

    this._concatFunctions(),

    this._concatParameters(),

    'void main() {',

    this._concatVertexInit(),

    THREE.ShaderChunk.uv_vertex,
    THREE.ShaderChunk.uv2_vertex,
    THREE.ShaderChunk.color_vertex,
    THREE.ShaderChunk.beginnormal_vertex,

    this._concatTransformNormal(),

    THREE.ShaderChunk.morphnormal_vertex,
    THREE.ShaderChunk.skinbase_vertex,
    THREE.ShaderChunk.skinnormal_vertex,
    THREE.ShaderChunk.defaultnormal_vertex,

    '#ifndef FLAT_SHADED', // Normal computed with derivatives when FLAT_SHADED

    '	vNormal = normalize( transformedNormal );',

    '#endif',

    THREE.ShaderChunk.begin_vertex,

    this._concatTransformPosition(),

    THREE.ShaderChunk.displacementmap_vertex,
    THREE.ShaderChunk.morphtarget_vertex,
    THREE.ShaderChunk.skinning_vertex,
    THREE.ShaderChunk.project_vertex,
    THREE.ShaderChunk.logdepthbuf_vertex,

    '	vViewPosition = - mvPosition.xyz;',

    THREE.ShaderChunk.worldpos_vertex,
    THREE.ShaderChunk.envmap_vertex,
    THREE.ShaderChunk.lights_phong_vertex,
    THREE.ShaderChunk.shadowmap_vertex,

    '}',
  ].join('\n');
};
