import { defineQuery } from "next-sanity";

export const STARTUP_QUERY = defineQuery(`
    *[_type == 'startup' && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search] {
        createdAt,
        _id,
        author -> {
            _id, name
        },
        category,
        description,
        image,
        pitch,
        slug,
        title,
        views,
        _type,
        _createdAt,
        _updatedAt,
        _rev
    }
`);

export const STARTUP_BY_ID_QUERY = defineQuery(`
    *[_type == 'startup' && _id == $id][0] {
  _createdAT,
  _id,
  author -> {
    _id, name, username, image, bio
  },
  category,
  description,
  image,
  pitch,
  slug,
  title,
  views,
  createdAt
}
`);
