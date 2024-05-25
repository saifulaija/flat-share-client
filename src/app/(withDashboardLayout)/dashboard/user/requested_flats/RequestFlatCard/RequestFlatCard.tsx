import { formateDate, formateMoney } from "@/utils/common";
import { Clock, DollarSign, LocateIcon } from "lucide-react";
import Image from "next/image";
import Badge from "./Badge";

const RequestFlatCard = ({ item }) => {
  return (
    <article className="flex justify-between items-center gap-3 border rounded-lg p-5 hover:bg-muted/60 ">
      <div className="text-muted-foreground">
        <p className="flex items-center gap-1.5">
          <LocateIcon size={16} className="shrink-0" />
          {item.flat.location}
        </p>
      </div>
      <div className="text-muted-foreground">
        <p className="flex items-center gap-1.5">
        
          {formateMoney(item.flat.rentAmount)}
        </p>
      </div>
      
      <div className="text-muted-foreground">
        <p className="flex items-center gap-1.5">
        <Clock size={16} className="shrink-0" />
          {formateDate(item?.createdAt)}
        </p>
      </div>
      <div>
        <Badge>
            {item?.status}
        </Badge>
      </div>
    </article>
  );
};

export default RequestFlatCard;
