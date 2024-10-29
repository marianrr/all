export default async function Page() {

const dum = async () => {

const res = await fetch('https://dummyjson.com/posts')

return res.json();

}
const so = await dum()
console.log(so)

    return (
        <>
        <p>This is dummy page.</p>
        {so['posts'].map( (e: any) => <p key={e.id}>{e.body}</p>)}
        
        </>
    );
}



// export default async function Fetchondemand() {
//     const soto = async () => {
//     const res = await fetch('https://dummyjson.com/posts')
    
//     return res.json()
    
//     }
    
//     const lol = await soto()
//     console.log(lol)
    
    
    
    
//         return (
    
//            <>
//            <p>dj guga la felipa</p>
    
//            {lol.posts.map((ss: any) => <p key={ss.id}>{ss.title}</p>)}
//            </> 
//         );
//     }