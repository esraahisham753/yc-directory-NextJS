import { formatDate } from "@/lib/utils"
import { EyeIcon } from "lucide-react"
import Image from "next/image";
import Link from "next/link"
import { Button } from "./ui/button";
import { Startup, Author } from "@/sanity/types";

export type StartupTypeCard = Omit<Startup, "author"> & { author?: Author };

const StartupCard = ({ post } : { post: StartupTypeCard }) => {
  const { _id, createdAt, views, author, image, category, description, title } = post;
  return (
    <li className="startup-card group">
        <div className="flex-between">
             <p className="startup-card_date">{formatDate(post.createdAt!)}</p>
             <div className="flex gap-1.5">
                <EyeIcon className="size-6"/>
                <span className="text-16-medium">{views}</span>
             </div>
        </div>
        <div className="flex-between mt-5 gap-5">
            <div className="flex-1">
                <Link href={`/user/${author?._id}`}>
                    <p className="text-16-medium line-clamp-1">{author?.name}</p>
                </Link>
                <Link href={`/startup/${_id}`}>
                  <h3 className="text-26-semibold line-clamp-1">{title}</h3>
                </Link>
            </div>
            <Link href={`/user/${author?._id}`}>
              <Image src="https://placehold.co/48x48" alt="Placeholder" width={48} height={48} className="rounded-full"/>
            </Link>
        </div>
        <Link href={`/startup/${_id}`}>
          <p className="startup-card_desc">{description}</p>
          <img src={image} alt="startup" className="startup-card_img"/>
        </Link>
        <div className="flex mt-6 justify-between">
          <Link href={`/?query=${category}`}>
            <p className="text-20-medium">Robots</p>
          </Link>
          <Button className="startup-card_btn" asChild>
            <Link href={`/startup/${_id}`}>Details</Link>
          </Button>
        </div>
    </li>
  )
}

export default StartupCard