import { Component, ErrorInfo, ReactNode } from "react";
import ErrorBanner from "../ErrorBanner/ErrorBanner";

interface ErrorBoundaryProps {
  children: ReactNode;
  t: (arg: string) => string;
}

interface ErrorBoundaryState {
  error: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      error: false,
    };
  }


  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo);
    this.setState({ error: true });
  }

  render() {
    const { t } = this.props;
    if (this.state.error) {
      return <ErrorBanner t={t} />

    }
    return this.props.children;
  }
}

export default ErrorBoundary;
