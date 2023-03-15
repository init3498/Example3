import React, { createContext } from 'react';
import { useState } from 'react';

interface TransitionContextType {
	completed: boolean;
	toggleCompleted?: (value: boolean) => void;
}

const TransitionContext = createContext<TransitionContextType>({ completed: false });

type Props = {
	children?: React.ReactNode;
};

export function TransitionProvider ({ children }: Props) {
	const [completed, setCompleted] = useState(false);

	const toggleCompleted = (value: boolean) => {
		setCompleted(value);
	};

	return (
		<TransitionContext.Provider
			value={{
				toggleCompleted,
				completed,
			}}
		>
			{children}
		</TransitionContext.Provider>
	);
};

export default TransitionContext;