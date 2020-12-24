import { Component } from "react";

type ErrorBoundaryState = {
  error: Error | null;
};

type ErrorBoundaryProps = {
  fallback: React.VFC<{ error: Error }>;
};

/**
 * If you don't want to maintain this yourself, you should look for the react-error-boundary package.
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps> {
  public state: ErrorBoundaryState = { error: null };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  render(): React.ReactNode {
    const { children, fallback: Fallback } = this.props;
    const { error } = this.state;

    if (error !== null) {
      return <Fallback error={error} />;
    }
    return children;
  }
}
