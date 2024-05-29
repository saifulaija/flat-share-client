import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"

  type TProps={
    url:string;
    alt:string
  }
  
  export function MyAvatar({url,alt}:TProps) {
    return (
      <Avatar>
        <AvatarImage src={url} alt={alt} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    )
  }
  