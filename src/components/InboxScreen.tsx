import { connect } from "react-redux";

import TaskList from "./TaskList";

export interface InboxScreenProps {
  error?: string;
}
export function InboxScreen({ error }: InboxScreenProps) {
  if (error) {
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <div className="title-message">Oh no!</div>
          <div className="subtitle-message">Something went wrong</div>
        </div>
      </div>
    );
  }

  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">
          <span className="title-wrapper">Taskbox</span>
        </h1>
      </nav>
      <TaskList />
    </div>
  );
}

export default connect(({ error }: { error: string }) => ({ error }))(
  InboxScreen
);
