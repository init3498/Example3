import { TransitionProvider } from '../Transition/context';
import TransitionComponent from "../Transition";

import styles from "./Layout.module.scss";


type Props = {
  children: JSX.Element | null;
};

export default function Layout({ children }: Props) {

  return (
    <div className={styles.layout} id="main-container">
        <TransitionProvider>
          <TransitionComponent>
            <main className={styles.content}> {children}</main>
          </TransitionComponent>
      </TransitionProvider>
    </div>
  );
}
