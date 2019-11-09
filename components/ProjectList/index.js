/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 *
 * Project list
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Link from 'next/link';

import './styles.scss';

function ProjectList({ className, data }) {
  return (
    <div className={clsx('project-list', className)}>
      <ul className="project-list__list">
        {data.map((datum, index) => (
          <li className="project-list__year" index={index} key={datum.year}>
            {datum.year}
            <ul className="project-list__year__list">
              {datum.projects.map(proj => (
                <li className="project-list__year__item" key={proj.slug}>
                  <Link href="/work/[project]" as={`/work/${proj.slug}`}>
                    <a className="project-list__year__link">{proj.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

ProjectList.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
};

export default ProjectList;
