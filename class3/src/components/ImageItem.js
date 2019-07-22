import React from 'react';

class ImageItem extends React.Component {

    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        console.log(this.imageRef);
    }

    get Height() {
        console.log(this.imageRef.current.offsetHeight);

        return this.imageRef.current.offsetHeight;
    }

    render() { 
        return ( 
            <img key={this.props.key} src={this.props.url} alt={this.props.description} ref={this.imageRef} />
         )
    }
}

export default ImageItem;