import { NavLink } from "react-router-dom";
import { TypewriterEffect } from "./TypeWriter"
// import "../Home Page/App.cs"

export const HomeHeading = () => {
  const text = `drwxrwxrwx 2 user user 4096 Feb 28 12:00 .
drwxr-xr-x 4 user user 4096 Feb 28 11:50 ..
-rw-rw-r-- 1 user user    0 Feb 28 12:00 file1.txt
-rw-rw-r-- 1 user user    0 Feb 28 12:00 file2.txt
-rw-rw-r-- 1 user user    0 Feb 28 12:00 file3.txt
-rw-rw-r-- 1 user user    0 Feb 28 12:00 file4.txt
-rw-rw-r-- 1 user user    0 Feb 28 12:00 file5.txt
-rw-rw-r-- 1 user user    0 Feb 28 12:00 file6.txt
-rw-rw-r-- 1 user user    0 Feb 28 12:00 file7.txt
-rw-rw-r-- 1 user user    0 Feb 28 12:00 file8.txt
-rw-rw-r-- 1 user user    0 Feb 28 12:00 file9.txt
-rw-rw-r-- 1 user user    0 Feb 28 12:00 file10.txt
-rw-rw-r-- 1 user user    0 Feb 28 12:00 file11.txt
.`;
  return (
    <div className="container-heading">
      <div className="left-side">
        <h1 className="heading"> Master the Command Line Interactive Practice Platform</h1>
        <p className="para">Practice CLI commands in a safe environment. Learn by doing with real-time feedback and progressive challenge.</p>
        <div className="buttons">
          <button className="button">
            <NavLink>Start Practicing</NavLink></button>
          <button className="button"> <NavLink>View Challenge</NavLink></button>
        </div>
      </div>
      <div className="right-side">
        {/* <TypewriterEffect className="typewriter-text" text={multilineText} /> */}
        <TypewriterEffect text={text} speed={100} wordsPerLine={3} />
        {/* <TypewriterEffect  /> */}
      </div>
    </div>
  );
};