import { NextPage } from "next";
import { Container } from "../styles/Error";
import Link from "next/link";

interface Props {
  statusCode?: number;
}

export const Error: NextPage<Props> = ({ statusCode }) => {
  return (
    <Container>
      <h2>{getMessageFromStatusCode(statusCode || 404)}</h2>

      <h6>{getMessageFromStatusCode(statusCode || 404)}</h6>

      <Link href="/">Back</Link>
    </Container>
  );
};

function getMessageFromStatusCode(code: number): string {
  if (code == 404) {
    return "Page not found";
  }
  return "Internal Server Error";
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
