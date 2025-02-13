import TopHeader from '../Components/TopHeader'
import NavigationBar from '../Components/NavigationBar'
import SideBar from '../Components/SideBar'
import SlideShow from '../Components/SlideShow'

export default function HomePage() {
    return (
        <div>

            <TopHeader />
            <NavigationBar />
            <div className='flex justify-center'>
                <SideBar />
                <SlideShow />
            </div>

        </div>
    )
}