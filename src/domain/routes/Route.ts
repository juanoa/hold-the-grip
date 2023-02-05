import {Location} from "@/domain/location/Location";
import {Tag} from "@/domain/routes/Tag";
import {Grade} from "@/domain/routes/Grade";
import {Region} from "@/domain/location/Region";

export type Route = {
    slug: string
    region: Region
    name: string
    grade: Grade
    location: Location
    description: string
    tags: Array<Tag>
}