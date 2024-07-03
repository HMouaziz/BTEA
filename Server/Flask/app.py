from flask import Flask, request, jsonify, make_response
import jwt
import datetime
from functools import wraps

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your_secret_key'


def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.cookies.get('token')
        if not token:
            return jsonify({'message': 'Token is missing!'}), 403
        try:
            data = jwt.decode(token, app.config['SECRET_KEY'], algorithms=["HS256"])
        except Exception as e:
            return jsonify({'message': str(e)}), 403
        return f(*args, **kwargs)
    return decorated


@app.route('/auth/register', methods=['POST'])
def register():
    return jsonify({'message': 'User registered successfully!'}), 201


@app.route('/auth/login', methods=['POST'])
def login():
    token = jwt.encode({'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=30)}, app.config['SECRET_KEY'])
    response = make_response(jsonify({'message': 'Logged in successfully!'}), 200)
    response.set_cookie('token', token, httponly=True, samesite='Strict')
    return response


@app.route('/auth/logout', methods=['POST'])
@token_required
def logout():
    response = make_response(jsonify({'message': 'Logged out successfully!'}), 200)
    response.set_cookie('token', '', expires=0)
    return response


@app.route('/auth/verifyToken', methods=['POST'])
@token_required
def verify_token():
    return jsonify({'message': 'Token is valid!'}), 200


@app.route('/list/create', methods=['POST'])
@token_required
def create_list():
    return jsonify({'message': 'List created!'}), 201


@app.route('/list/get', methods=['GET'])
@token_required
def get_lists():
    return jsonify({'message': 'Lists retrieved!'}), 200


@app.route('/list/update/<int:list_id>', methods=['PUT'])
@token_required
def update_list(list_id):
    return jsonify({'message': 'List updated!'}), 200


@app.route('/list/delete/<int:list_id>', methods=['DELETE'])
@token_required
def delete_list(list_id):
    return jsonify({'message': 'List deleted!'}), 200


@app.route('/task/create', methods=['POST'])
@token_required
def create_task():
    return jsonify({'message': 'Task created!'}), 201


@app.route('/task/get', methods=['GET'])
@token_required
def get_tasks():
    return jsonify({'message': 'Tasks retrieved!'}), 200


@app.route('/task/update/<int:task_id>', methods=['PUT'])
@token_required
def update_task(task_id):
    return jsonify({'message': 'Task updated!'}), 200


@app.route('/task/delete/<int:task_id>', methods=['DELETE'])
@token_required
def delete_task(task_id):
    return jsonify({'message': 'Task deleted!'}), 200


if __name__ == '__main__':
    app.run(debug=True)
