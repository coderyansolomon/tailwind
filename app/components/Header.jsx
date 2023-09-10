import Link from "next/link"

const headerItems = [
    {label: 'Overview', path: '/'},
    {label: 'Utility-first', path: '/utility-first'},
    {label: 'Handling States', path: '/states'},
    {label: 'Responsive Design', path: '/responsive'},
    {label: 'Customization', path: '/customization'},
]

export default function Header(){
    return (
        <header>
            <nav>
                <ul className="w-screen absolute top-0 left-0 flex justify-evenly p-10">
                    {
                      headerItems.map((item) => {
                        return (
                        <Link href={item.path} key={item.label}>
                            <li>{item.label}</li>
                        </Link>
                        )
                      })  
                    }
                </ul>
            </nav>
        </header>
    )
}