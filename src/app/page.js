import Image from "next/image";
import Tile from "../../components/tile/tile";

export default function Home() {
    return (
        <main>
            <h1 className="font-sankofa text-7xl text-white mb-10">Dish Dash</h1>
            <Tile />
        </main>
    );
}
