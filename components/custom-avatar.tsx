import { Avatar, AvatarImage } from "@/components/ui/avatar";
import formatDate from "@/lib/date-format";

interface ICustomAvatar {
  url: string;
  name: string;
  date: Date;
}

function CustomAvatar({ url, name, date }: ICustomAvatar) {
  return (
    <div className="flex items-center gap-4">
      <Avatar className="h-12 w-12">
        <AvatarImage src={url} />
      </Avatar>
      <div className="flex flex-col text-sm">
        <span>{name}</span>
        <span>{formatDate(date)}</span>
      </div>
    </div>
  );
}

export default CustomAvatar;
