import fs from "fs";
import path from "path";
import matter from "gray-matter";
const pwd = process.cwd();
const postDirectory = path.relative(pwd, "posts");

// export function generatePostsData() {
//     const posts = [];
//     fs.readdir(postDirectory, (err, files) => {
//         if(err) {
//             console.log('err', err);
//         } else {
//             console.log('\n 当前文件', pwd);
//             files.forEach(fileName => {
//                 console.log('fileName', fileName)
//                 const post = {};
//                 post.id = fileName.replace(/\.md$/, '')

//                 const filePath = path.join(postDirectory, fileName); ;

//                 const str = fs.readFileSync(filePath, 'utf8')
//                 // console.log('post.id ', post.id, postDirectory, str );
//                 const res = matter(str);
//                 // console.log('data', res);

//                 post.title = res.data.title;
//                 post.date = res.data.date;
//                 post.content = res.content;

//                 posts.push(post);

//             })

//             console.log('posts', posts);
//         }
//     })

// }

export function generatePostsData() {
  // get file names under /posts
  const fileNames = fs.readdirSync(postDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // remove '.md' from filename to get id
    const id = fileName.replace(/\.md$/, '');
    // read markdown file as string
    const fullPath = path.join(postDirectory, fileName);
    const fileContent = fs.readFileSync(fullPath, 'utf-8');
    // use gray-matter to parse the post metadata section
    const matterResult = matter(fileContent);

    return {
        id,
        ...matterResult.data
    }
  });

  // combine the data with the id
  return allPostsData.sort((a, b) => a.date > b.date ? 1 : -1);
}
