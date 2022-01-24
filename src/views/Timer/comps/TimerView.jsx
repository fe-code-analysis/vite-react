import { observer, useLocalObservable } from "mobx-react";
import { useEffect } from "react";

const TimerView = () => {
	const timer = useLocalObservable(() => ({
		secondsPassed: 0,
    get oddSeconds() {
      let odd = this.secondsPassed % 2 === 1
      return odd ? this.secondsPassed : 0
    },
		increaseTimer() {
			this.secondsPassed++;
		}
	}));

	useEffect(() => {
		const handle = setInterval(() => {
			timer.increaseTimer();
		}, 1000);
		return () => {
			clearInterval(handle);
		};
	}, [timer]);
	return (
		<>
			<span>Seconds passed: {timer.secondsPassed}</span>
      <span>odd {timer.oddSeconds}</span>
			<button onClick={() => timer.increaseTimer()}>++</button>
		</>
	);
};

export default observer(TimerView);
