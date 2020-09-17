import React, { useEffect, useState } from "react";

// class Clock extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       now: new Date(),
//     };
//   }

//   startClock() {
//     this._interval = setInterval(() => {
//       // this.state.now = new Date();
//       // setState equivalent à Object.assign
//       this.setState({
//         now: new Date(),
//       });
//     }, this.props.delay);
//   }

//   stopClock() {
//     clearInterval(this._interval);
//   }

//   // lifecycle
//   componentDidMount() {
//     this.startClock();
//   }

//   componentDidUpdate(previousProps) {
//     if (this.props.delay !== previousProps.delay) {
//       this.stopClock();
//       this.startClock();
//     }
//   }

//   componentWillUnmount() {
//     this.stopClock();
//   }

//   render() {
//     return (
//       <div className="Clock">
//         <span>Heure : </span>
//         <span>{this.state.now.toLocaleTimeString()}</span>
//       </div>
//     );
//   }
// }

function Clock({ delay = 1000 }) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    console.log('componentDidMount / componentDidUpdate');
    const _interval = setInterval(() => {
      setNow(new Date());
    }, delay);

    return () => {
      console.log('componentWillUnmount / componentDidUpdate');
      clearInterval(_interval);
    };
  }, [delay]);

  return (
    <div className="Clock">
      <span>Heure : </span>
      <span>{now.toLocaleTimeString()}</span>
    </div>
  );
}

export default Clock;
