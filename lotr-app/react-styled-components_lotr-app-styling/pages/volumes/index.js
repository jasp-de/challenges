import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import styled from "styled-components";

const VolumeList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const VolumeItem = styled.li`
  margin-bottom: 10px;
`;

const StyledLink = styled(Link)`
  color: var(--color-earth);
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default function Volumes() {
  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <VolumeList>
        {volumes.map((volume) => (
          <VolumeItem key={volume.slug}>
            <StyledLink href={`/volumes/${volume.slug}`}>
              {volume.title}
            </StyledLink>
          </VolumeItem>
        ))}
      </VolumeList>
    </>
  );
}
