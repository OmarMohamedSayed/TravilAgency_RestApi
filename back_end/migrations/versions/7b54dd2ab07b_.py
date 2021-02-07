"""empty message

Revision ID: 7b54dd2ab07b
Revises: 744d6492be98
Create Date: 2021-01-24 12:48:48.159285

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7b54dd2ab07b'
down_revision = '744d6492be98'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('cardData', sa.Column('image', sa.LargeBinary(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('cardData', 'image')
    # ### end Alembic commands ###