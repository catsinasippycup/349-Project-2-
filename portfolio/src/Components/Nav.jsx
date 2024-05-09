import {CgNametag} from 'react-icons/cg';
export default function Nav() {
        return(
            <>
                <div className="flex item-center justify-between p-10 lg:flex-row">
                    <div>
                        <a href="#" className="text-white font-mono text-3xl tracking-wider flex"><CgNametag/>Name goes here</a> 
                    </div>
                    <div className="space-x-4">
                        <a href="#" className="text-white hover:bg-slate-600 rounded-full px-5 py-2 text-xl">About</a>
                        <a href="#" className="text-white hover:bg-slate-600 rounded-full px-5 py-2 text-xl">Projects</a>
                        <a href="#" className="text-white hover:bg-slate-600 rounded-full px-5 py-2 text-xl">Contact me</a>
                    </div>
                </div>
            </>
        )
}