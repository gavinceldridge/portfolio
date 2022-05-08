import technologyFavicon from "../enums/technologyFavicons";

interface projectData {
    title: string;
    subtitle: string;
    image: any;
    link: string;
    techStack: Array<technologyFavicon>;
}

export default projectData;