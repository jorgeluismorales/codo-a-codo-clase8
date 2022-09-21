'use strict'; // 

const ReactElement = React.createElement;

export default class Audio extends React.Component {
    render() {
        return ReactElement(
            'audio', {
                src : "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                controls : true
            }
            
        );
    }
}

ReactDOM.render(ReactElement(Audio) , document.getElementById("myApp"));

        