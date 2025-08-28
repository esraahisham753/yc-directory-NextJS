import { formatDate } from "@/lib/utils"
import { EyeIcon } from "lucide-react"
import Image from "next/image";
import Link from "next/link"

const StartupCard = ({ post } : { post: StartupTypeCard }) => {
  const { _id, _createdAt, views, author: {_id: authorId, name}, image, category, description, title } = post;
  return (
    <li className="startup-card group">
        <div className="flex-between">
             <p className="startup-card_date">{formatDate(post._createdAt)}</p>
             <div className="flex gap-1.5">
                <EyeIcon className="size-6"/>
                <span className="text-16-medium">{views}</span>
             </div>
        </div>
        <div className="flex-between mt-5 gap-5">
            <div className="flex-1">
                <Link href={`/user/${authorId}`}>
                    <p className="text-16-medium line-clamp-1">{name}</p>
                </Link>
                <Link href={`/startup/${_id}`}>
                  <h3 className="text-26-semibold line-clamp-1">{title}</h3>
                </Link>
            </div>
            <Link href={`/user/${authorId}`}>
              <Image src="https://placehold.co/48x48" alt="Placeholder" width={48} height={48} className="rounded-full"/>
            </Link>
        </div>
        <Link href={`/startup/${_id}`}>
          <p>{description}</p>
          <img src={image} alt="startup"/>
        </Link>
    </li>
  )
}

export default StartupCard