export default function HobbyLinks() {
    let hobbyLinks = ["https://www.nytimes.com/guides/well/beginner-yoga","https://www.fandango.com/"];

    return (
        <>
        <h3>{HobbyLinks}My Hobbies</h3>
        <a href = {hobbyLinks[0]}>Yoga </a>
        <a href = {hobbyLinks[1]}>Movie</a>
        </>
    );
};