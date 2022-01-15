const $ = jQuery;

$(() => {
	if (!$('parallax-me').length) return;

	const $scene = $('<div />', {
		id: 'kpb-scene',
		'data-hover-only': true
	});
	$('#main-content').append($scene);

	const dimentions = {
		x: 300,
		y: 114
	};

	const layers = [{
		depth: 0.1,
		images: [{
			name: 'background.svg',
			class: 'background'
		}, {
			name: 'mountains.svg',
			class: 'full'
		}]
	}, {
		depth: 0.1,
		images: [{
			name: 'clouds1.svg',
			class: 'full'
		}]
	}, {
		depth: 0.2,
		images: [{
			name: 'layer1.svg',
			class: 'full'
		}]
	}, {
		depth: 0.3,
		images: [{
			name: 'layer2.svg',
			class: 'full'
		}]
	}, {
		depth: 0.4,
		images: [{
			name: 'clouds2.svg',
			class: 'full'
		}]
	}, {
		depth: 0.5,
		images: [{
			name: 'layer3.svg',
			class: 'full'
		}]
	}, {
		depth: 0.6,
		images: [{
			name: 'layer4.svg',
			class: 'full'
		}]
	}, {
		depth: 0.7,
		images: [{
			name: 'layer5.svg',
			class: 'full'
		}]
	}, {
		depth: 0.8,
		images: [{
			name: 'layer6.svg',
			class: 'full'
		}]
	}, {
		depth: 0.9,
		images: [{
			name: 'layer7.svg',
			class: 'full'
		}]
	}, {
		depth: 1,
		images: [{
			name: 'layer8.svg',
			class: 'full'
		}]
	}];

	layers.forEach(layer => {
		const $layer = $('<div />', {
			class: 'kpb-layer',
			'data-depth': layer.depth
		}).appendTo($scene);

		layer.images.forEach(image => {
			$('<div />', {
				class: image.class
			}).css({
				backgroundImage: `url(${kpb.url}images/${image.name}?${kpb.version})`
			}).appendTo($layer);
		});
	});

	const parallaxInstance = new Parallax($scene.get(0));
});