// Databyte Avatar [v0.0.1]
import { Flex } from './flex';

function getInitials(name: string) {
  if (name.split(' ').length === 1)
    return `${name[0] || `A`}${name[1] || `A`}`.toUpperCase();
  return name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

type AvatarProps = {
  title: string;
};

function Avatar({ title }: AvatarProps) {
  return (
    <Flex
      justify="center"
      items="center"
      className="rounded w-24 h-24 bg-background-emphasis"
    >
      <span className="text-5xl text-white font-bold">
        {getInitials(title)}
      </span>
    </Flex>
  );
}

export { Avatar, type AvatarProps };
