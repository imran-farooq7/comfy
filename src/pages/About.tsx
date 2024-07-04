const About = () => {
	// A `p` element with classes `mt-6`, `text-lg`, `leading-8`, `max-w-2xl`, and `mx-auto`, containing sample Lorem ipsum text.
	return (
		<>
			<div className="flex flex-wrap gap sm:gap-x-6 items-center justify-center">
				<h1 className="text-4xl font-bold leading-none tracking-tight">
					We love
				</h1>
				<div className="stats bg-primary shadow">
					<div className="stat">
						<div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
							comfy
						</div>
					</div>
				</div>
			</div>
			<p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta assumenda
				quam accusantium, unde eius cumque, ipsum similique quae libero,
				asperiores laborum dolore? Totam, soluta temporibus voluptates magnam ex
				laudantium. Iusto!
			</p>
		</>
	);
};
export default About;
