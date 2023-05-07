//Components
import Button from "@/components/atoms/Button"

export default function HomeTemplate() {
  return (
    <div className="flex flex-col gap-10 items-center justify-center min-h-screen">
      <div className="flex gap-2 flex-wrap">
        <div className="flex flex-col gap-2 items-center">
          <Button size="sm">sm-blue button</Button>
          <Button>md-blue button</Button>
          <Button size="lg">lg-blue button</Button>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Button size="sm" color="red">
            sm-red button
          </Button>
          <Button color="red">md-red button</Button>
          <Button size="lg" color="red">
            lg-red button
          </Button>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Button size="sm" color="green">
            sm-green button
          </Button>
          <Button color="green">md-green button</Button>
          <Button size="lg" color="green">
            lg-green button
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2">
        <Button color="green" size="sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-5">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>{" "}
          Onayla
        </Button>
        <Button color="green">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-5">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>{" "}
          Onayla
        </Button>
        <Button color="green" size="lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-5">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>{" "}
          Onayla
        </Button>
      </div>
      <div className="flex items-center justify-center gap-2">
        <Button size="lg" className="rounded-full">
          rounded-full button
        </Button>
      </div>
    </div>
  )
}
