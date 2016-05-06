import alt from '../alt';

class FooterActions {
	constructor() {
		this.generateActions(
			'getTopCharactersSuccess',
			'gettopCharactersFail'
		);
	}

	// // the above is equivlent to:
	// getTopCharactersSuccess(payload) {
	// 	this.dispatch(payload);
	// }

	// gettopCharactersFail(payload) {
	// 	this.dispatch(payload);
	// }

	getTopCharacters() {
		$.ajax({ url: '/api/characters/top' })
			.done((data) => {
				this.actions.getTopCharactersSuccess(data)
			})
			.fail((jqXhr) => {
				this.actions.gettopCharactersFail(jqXhr)
			});
	}
}

export default alt.createActions(FooterActions);