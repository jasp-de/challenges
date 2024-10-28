import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import styled from "styled-components";

const VolumeWrapper = styled.div`
  background-color: ${(props) => props.color};
  padding: 20px;
  color: var(--color-clouds);
`;

const BookList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const BookItem = styled.li`
  margin-bottom: 10px;
`;

const StyledLink = styled(Link)`
  color: var(--color-clouds);
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);
  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books, color } = volume;

  return (
    <VolumeWrapper color={color}>
      <StyledLink href="/volumes">← All Volumes</StyledLink>
      <h1>{title}</h1>
      <p>{description}</p>
      <BookList>
        {books.map(({ ordinal, title }) => (
          <BookItem key={title}>
            <strong>{ordinal}:</strong> {title}
          </BookItem>
        ))}
      </BookList>
      <Image
        src={cover}
        alt={`Cover image of ${title}`}
        width={140}
        height={230}
      />
      {previousVolume && (
        <div>
          <StyledLink href={`/volumes/${previousVolume.slug}`}>
            ← Previous Volume: {previousVolume.title}
          </StyledLink>
        </div>
      )}
      {nextVolume && (
        <div>
          <StyledLink href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title} →
          </StyledLink>
        </div>
      )}
    </VolumeWrapper>
  );
}
