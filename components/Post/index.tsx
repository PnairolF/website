import Link from "next/link";

export type Props = {
  href: string;
  title: string;
  picture: string;
  pictureAlt: string;
  category: string;
  categoryHref: string;
  excerpt: string;
  publishDate: string;
  timeReading: string;
};

const Post = ({
  href,
  title,
  picture,
  pictureAlt,
  category,
  categoryHref,
  excerpt,
  publishDate,
  timeReading,
}: Props) => (
  <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <div className="flex-shrink-0">
      <img
        className="h-48 w-full object-cover"
        src={picture}
        alt={pictureAlt}
      />
    </div>
    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
      <div className="flex-1">
        <p className="text-sm leading-5 font-medium text-indigo-600">
          <Link href={categoryHref}>
            <a className="hover:underline">{category}</a>
          </Link>
        </p>
        <Link href={href}>
          <a className="block">
            <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
              {title}
            </h3>
            <p className="mt-3 text-base leading-6 text-gray-500">{excerpt}</p>
          </a>
        </Link>
      </div>
      <div className="mt-6 flex items-center">
        <div className="flex text-sm leading-5 text-gray-500">
          <time dateTime={publishDate}>{publishDate}</time>
          <span className="mx-1">&middot;</span>
          <span>{timeReading} de lecture</span>
        </div>
      </div>
    </div>
  </div>
);

export default Post;
