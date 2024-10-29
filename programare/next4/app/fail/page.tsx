import { promises as fs } from 'fs';


export default async function Page() {
    const file = await fs.readFile(process.cwd() + '/app/lolo.txt', 'utf8');
// const data = file
console.log(file)
await fs.writeFile(process.cwd() + '/app/lolo.txt', "Marian eu sunt web developer!!!...");
    return (
        <>
        <p>{file}</p>
            </>
    )
}