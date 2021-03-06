import React from 'react';

class StorePicker extends React.Component{
    myInput = React.createRef();

    goToStore = event => {
        event.preventDefault();
        const storeName = this.myInput.current.value;
        this.props.history.push(`/store/${storeName}`);
    };

    render(){
        return (
            <React.Fragment>
                <form className="store-selector" onSubmit={this.goToStore}>
                    <h2>Please enter a store</h2>
                    <input type="text" required placeholder="Store name" ref={this.myInput}/>
                    <button type="submit">Visit store</button>
                 </form>
            </React.Fragment>
        )
    }
}

export default StorePicker;