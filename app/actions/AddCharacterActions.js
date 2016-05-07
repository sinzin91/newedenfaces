import alt from '../alt';

class AddCharacterActions {
	constructor() {
		this.generateActions(
			'addCharacterSuccess',
			'addChracterFail',
			'updateName',
			'updateGender',
			'invalidName',
			'invalidGender'
		);
	}

	addCharacter(name, gender) {
		$.ajax({
			type: 'POST',
			url: '/api/characters',
			data: { name: name, gender: gender }
		})
		.done((data) => {
			this.actions.addCharacterSuccess(data.message);
		})
		.fail((jqXhr) => {
			this.actions.addChracterFail(jqXhr.responseJSON.message);
		});
	}
}

export default alt.createActions(AddCharacterActions);