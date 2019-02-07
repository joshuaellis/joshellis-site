function buildButtons(){
    if(this.location == 'about'){
        return (
            <HeadingWrapper>
                <SVG className='disabledButton' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g id="icons">
                        <path style={{fill:'#fff', opacity:'0.8'}} d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm2.84,17.71a.77.77,0,0,1-.53.22.79.79,0,0,1-.53-.22L7.06,12l6.72-6.71a.74.74,0,0,1,1.06,0,.75.75,0,0,1,0,1.06L9.19,12l5.65,5.66A.74.74,0,0,1,14.84,18.71Z" />
                        <rect style={{fill:'none'}} width="24" height="24" />
                    </g>
                </SVG>
                <h2 style={{position:'relative', bottom:'4px'}}><Label>//00 </Label>About</h2>
                <A to="/work"><SVG style={{transform:'rotate(180deg)'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g id="icons" ><path style={{fill:'#fff', opacity:'0.8'}} d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm2.84,17.71a.77.77,0,0,1-.53.22.79.79,0,0,1-.53-.22L7.06,12l6.72-6.71a.74.74,0,0,1,1.06,0,.75.75,0,0,1,0,1.06L9.19,12l5.65,5.66A.74.74,0,0,1,14.84,18.71Z" /><rect style={{fill:'none'}} width="24" height="24" /></g>
                </SVG></A>
            </HeadingWrapper>
        )
    }
    else if(this.location == 'work'){
        let val = this.props.projectList.indexOf(this.props.project)
        if(val == 0){
            return(
                <HeadingWrapper>
                    <A to="/about"><SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g id="icons">
                            <path style={{fill:'#fff', opacity:'0.8'}} d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm2.84,17.71a.77.77,0,0,1-.53.22.79.79,0,0,1-.53-.22L7.06,12l6.72-6.71a.74.74,0,0,1,1.06,0,.75.75,0,0,1,0,1.06L9.19,12l5.65,5.66A.74.74,0,0,1,14.84,18.71Z" />
                            <rect style={{fill:'none'}} width="24" height="24" />
                        </g>
                    </SVG></A>
                    <h2 style={{position:'relative', bottom:'4px'}}><Label>//0{val + 1} </Label>{this.props.project}</h2>
                    <SVG onClick={this.handleForwardClick} style={{transform:'rotate(180deg)'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g id="icons" ><path style={{fill:'#fff', opacity:'0.8'}} d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm2.84,17.71a.77.77,0,0,1-.53.22.79.79,0,0,1-.53-.22L7.06,12l6.72-6.71a.74.74,0,0,1,1.06,0,.75.75,0,0,1,0,1.06L9.19,12l5.65,5.66A.74.74,0,0,1,14.84,18.71Z" /><rect style={{fill:'none'}} width="24" height="24" /></g>
                    </SVG>
                </HeadingWrapper>
            )
        }
        else if(val == (this.props.projectList.length - 1)){
            return(<HeadingWrapper>
                    <SVG onClick={this.handleBackwardClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g id="icons">
                            <path style={{fill:'#fff', opacity:'0.8'}} d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm2.84,17.71a.77.77,0,0,1-.53.22.79.79,0,0,1-.53-.22L7.06,12l6.72-6.71a.74.74,0,0,1,1.06,0,.75.75,0,0,1,0,1.06L9.19,12l5.65,5.66A.74.74,0,0,1,14.84,18.71Z" />
                            <rect style={{fill:'none'}} width="24" height="24" />
                        </g>
                    </SVG>
                    <h2 style={{position:'relative', bottom:'4px'}}><Label>//0{val + 1} </Label>{this.props.project}</h2>
                    <SVG className="disabledButton" style={{transform:'rotate(180deg)'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g id="icons" ><path style={{fill:'#fff', opacity:'0.8'}} d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm2.84,17.71a.77.77,0,0,1-.53.22.79.79,0,0,1-.53-.22L7.06,12l6.72-6.71a.74.74,0,0,1,1.06,0,.75.75,0,0,1,0,1.06L9.19,12l5.65,5.66A.74.74,0,0,1,14.84,18.71Z" /><rect style={{fill:'none'}} width="24" height="24" /></g>
                    </SVG>
            </HeadingWrapper>)
        }
        else{
            return(<HeadingWrapper>
                    <SVG onClick={this.handleBackwardClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g id="icons">
                            <path style={{fill:'#fff', opacity:'0.8'}} d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm2.84,17.71a.77.77,0,0,1-.53.22.79.79,0,0,1-.53-.22L7.06,12l6.72-6.71a.74.74,0,0,1,1.06,0,.75.75,0,0,1,0,1.06L9.19,12l5.65,5.66A.74.74,0,0,1,14.84,18.71Z" />
                            <rect style={{fill:'none'}} width="24" height="24" />
                        </g>
                    </SVG>
                    <h2 style={{position:'relative', bottom:'4px'}}><Label>//0{val + 1} </Label>{this.props.project}</h2>
                    <SVG onClick={this.handleForwardClick} style={{transform:'rotate(180deg)'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g id="icons" ><path style={{fill:'#fff', opacity:'0.8'}} d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm2.84,17.71a.77.77,0,0,1-.53.22.79.79,0,0,1-.53-.22L7.06,12l6.72-6.71a.74.74,0,0,1,1.06,0,.75.75,0,0,1,0,1.06L9.19,12l5.65,5.66A.74.74,0,0,1,14.84,18.71Z" /><rect style={{fill:'none'}} width="24" height="24" /></g>
                    </SVG>
            </HeadingWrapper>)
        }
    }
    else {
        return null
    }
}

export default buildButtons;