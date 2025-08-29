import { defineQuery } from "next-sanity";

export const STARTUP_QUERY = defineQuery(`
    *[_type == 'startup' && defined(slug.current)] {
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
