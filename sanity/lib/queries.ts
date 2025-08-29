import { defineQuery } from "next-sanity";

const STARTUP_QUERY = defineQuery(`
    *[_type == 'startup' && defined(slug.current)] {
        _createdAT,
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
        views
    }
`);
