export default function Logo(){
    return(
          <div className="flex items-center gap-2">
					<img src="/logo.svg" alt="astrointerest logo of a telescope" />{" "}
					<span className="hidden md:block text-white text-lg font-semibold">Astrointerest</span>
		  </div>
          )
}