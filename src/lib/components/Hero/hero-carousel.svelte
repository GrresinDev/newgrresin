<script lang="ts">
	import first from '$lib/assets/images/hero/first.jpg?enhanced';

	import second from '$lib/assets/images/hero/second.jpg?enhanced';

	import third from '$lib/assets/images/hero/last.png?enhanced';

	let imgContainer: HTMLElement;

	function stopImageRotation(intervalId: any) {
		if (intervalId) {
			clearInterval(intervalId);
		}
	}

	$effect(() => {
		if (!imgContainer) return;
		const intervalId = setInterval(() => {
			let last = imgContainer!.firstElementChild;
			last!.remove();
			imgContainer!.appendChild(last!);
		}, 2000);
		return () => {
			stopImageRotation(intervalId);
		};
	});
</script>

<section class="soso">
	<div id="img-container" bind:this={imgContainer}>
		<div class="box">
			<enhanced:img loading="lazy" src={first} alt="Resin Gallery" />
		</div>
		<div class="box">
			<enhanced:img src={second} loading="lazy" alt="Resin Gallery" />
		</div>
		<div class="box">
			<enhanced:img src={third} loading="lazy" alt="Resin Gallery" />
		</div>
	</div>
</section>

<style>
	.soso {
		position: relative;
		z-index: -1;
		padding: clamp(3em, 6vw, 5em);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column-reverse;
		gap: 2em;
	}

	#img-container {
		position: relative;
		height: 400px;
		width: 400px;
		perspective: 500px;
		transform-style: preserve-3d;
	}

	.box {
		height: 400px;
		width: 400px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotateY(10deg);
		border: 1px solid #bbb;
		border-radius: 50%;
		box-shadow: 0 0 8px hsla(0deg, 0%, 0%, 75%);
		transition: 800ms ease-in-out;
		overflow: hidden;
	}

	.box img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.box:first-of-type {
		opacity: 0;
		z-index: 5;
	}
	.box:nth-of-type(2) {
		opacity: 1;
		z-index: 5;
	}
	.box:nth-of-type(3) {
		opacity: 0.75;
		z-index: 10;
		transform: scale3d(0.5, 0.5, 0.5) translate(-50%, -50%) rotateY(10deg) translateZ(-40px);
	}
	.box:nth-of-type(4) {
		opacity: 0.5;
		z-index: 5;
		transform: scale3d(0.5, 0.5, 0.5) translate(-50%, -50%) rotateY(10deg) translateZ(-100px);
	}

	@media (max-width: 767px) {
		#img-container {
			height: 300px;
			width: 300px;
		}
		.box {
			height: 300px;
			width: 300px;
		}
	}
</style>
