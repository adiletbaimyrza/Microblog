import pytest
from datetime import datetime
from ..app import create_app


@pytest.fixture
def client():
    app = create_app()
    client = app.test_client()

    yield client

def test_home_page(client):
    rv = client.get('/')
    assert rv.status_code == 200

def test_post_entry(client):
    initial_entries = client.get('/').get_json()
    rv = client.post('/', data={'content': 'Test entry'})
    assert rv.status_code == 302
    updated_entries = client.get('/').get_json()
    assert len(updated_entries) > len(initial_entries)

def test_entry_format(client):
    rv = client.post('/', data={'content': 'Test entry'})
    entries = client.get('/').get_json()
    assert 'content' in entries[0]
    assert 'date' in entries[0]
    assert entries[0]['content'] == 'Test entry'
    assert isinstance(entries[0]['date'], datetime)
