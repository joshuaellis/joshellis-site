function buildCopy(){
    let text = this.props.message
    if(this.location == 'about'){
        return(
            <TextWrapper>
                <div style={{height:'100%', overflowY:'scroll'}} ref={this.copyBox}>
                    <p><Span>{text[0]}</Span>{text[1]}</p>
                    <p style={{marginBottom:'8px'}}><Span>{text[2]}</Span>{text[3]}</p>
                    <p><Span>{text[4]}</Span>{text[5]}</p>
                </div>
            </TextWrapper>
        )
    }
    else if(this.location == 'work'){
        text = this.props.message[this.props.project]
        if(!text){
            return(<TextWrapper><p>Something went wrong...</p></TextWrapper>)
        }
        else{
        return(
            <TextWrapper>
                <div style={{height:'100%', overflowY:'scroll'}} ref={this.copyBox}>
                    <p><Span>Role: </Span>{text[0]}</p>
                    <p><Span>Studio: </Span>{text[1]}</p>
                    <p><Span>Year: </Span>{text[2]}</p>
                    {text[4] ? (<p><Span>See Here: </Span><a target="_blank" style={{textDecoration:"none"}} href={text[4]}>{text[5]}</a></p>) : null }
                    <p style={{marginTop:'16px'}}><Span>Info: </Span>{text[3]}</p>
                </div>
            </TextWrapper>
        )
        }
    }
    else{
        return(
            null
        )
    }
}

export default buildCopy;