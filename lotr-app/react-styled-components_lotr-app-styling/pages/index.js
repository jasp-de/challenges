import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: var(--color-earth);
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default function HomePage() {
  return (
    <div>
      <StyledLink href="/volumes">Go to all volumes</StyledLink>
    </div>
  );
}
