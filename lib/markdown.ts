import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const fossDirectory = path.join(process.cwd(), 'content/foss');

export async function getFossData() {
    const fileNames = fs.readdirSync(fossDirectory);
    const allFossData = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(fossDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);

        return {
            slug,
            ...(data as { title: string; description: string; category: string; url: string }),
        };
    });
    return allFossData;
}