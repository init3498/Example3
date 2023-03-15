import { useRef, useEffect, useContext, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import styles from "./Home.module.scss";

const useIsomorphicLayoutEffect =
	typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function AboutDesktop() {

	useIsomorphicLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		let sections: HTMLElement[] = gsap.utils.toArray(".item");
		const container: HTMLElement = document.querySelector(".about")!;
		const images = sections.map((s) => s.querySelector("img")).filter(Boolean);

		let ctx = gsap.context(() => {
			let totalWidth = 0;

			const calculateTotalWidth = () => {
				const listContainer = document.querySelector(".container");
				sections.map((s) => {
					totalWidth += s.clientWidth;
				});

				if (listContainer !== null) {
					totalWidth -= listContainer.clientWidth;
					ScrollTrigger.refresh();
				}

				gsap.to(sections, {
					x: -totalWidth,
					ease: "none",
					scrollTrigger: {
						pin: true,
						trigger: container,
						scrub: 1,
						end: () => "+=" + `${container.offsetWidth}`,
					},
				});
			};

      gsap.to('.parallax', {
		    xPercent: -150,
		    ease: "none",
		      scrollTrigger: {
			      trigger: ".parallax",
			      start: "right right",
			      end: "left left",
			      scrub: 2
		      }
	      })

			let imagesLoaded = 0;
			const checkImagesLoaded = () => {
				imagesLoaded++;
				if (imagesLoaded === images.length) {
					calculateTotalWidth();
				}
			};

			images.forEach((image) => {
				if (image) {
					if (image.complete) {
						checkImagesLoaded();
					} else {
						image.onload = checkImagesLoaded;
					}
				}
			});
		}, container);

		return () => {
			images.forEach((image) => {
				if (image) {
					image.onload = null;
				}
			});
			ctx.revert();
		};
	}, []);




	return (
		<div data-scroll-section className={`about ${styles.about}`}>
			<div className={`container ${styles.container}`}>
				<div className={`item ${styles.introduction}`} data-scroll>
					<figure className={`parallax ${styles.image}`}>
						<img
							className={styles.img}
							src={"../../img/jpeg/green.jpeg"}
						/>
					</figure>
					<div className={styles.content}>
						<div className={styles.title}>
							<h1>{'ABOUT'}</h1>
						</div>
					</div>
				</div>
				<div className={`item ${styles.presentation}`}>
					<div className={styles.content}>
						<div className={styles.top}>
							<div className={styles.title}>
								<p>{'ABOUT'}</p>
							</div>
							<div className={styles.text}>
								<p>{'TEXT'}</p>
							</div>
						</div>
						<div className={styles.bottom}>
							<div className={styles.city}>
								<p>{'BERLIN'}</p>
							</div>
						</div>
					</div>
					<div className={styles.image}>
						<img
							className={styles.img}
							src={"../../img/jpeg/green.jpeg"}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
