import Image from "next/image";
import Link from "next/link"
let x = "BANANA"
console.log(x)
x = "banana"
console.log(x)
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div>
          <h1>Hello, welcome to: clicker game</h1>
          <Link href = "/clicker">Click to go to game!!!</Link>
          {/* <Image src = "https://media.istockphoto.com/id/1474792769/vector/nerd-emoji-emoticon-with-transparent-glasses-funny-yellow-face-with-black-rimmed-eyeglasses.jpg?s=612x612&w=0&k=20&c=2UJTjCgSogDrfExMtvaLxZzK6qx8Rc3o_wbQqbNPdWI="
         width = {1000} height = {500} alt = "YOU ARE A NERD"
         ></Image> */}
        </div>
      </main>
    </div>
  );
}
