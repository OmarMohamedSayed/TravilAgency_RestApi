"""empty message

Revision ID: 744d6492be98
Revises: 
Create Date: 2021-01-24 12:48:06.910492

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '744d6492be98'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('cardData', 'image')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('cardData', sa.Column('image', sa.VARCHAR(), autoincrement=False, nullable=True))
    # ### end Alembic commands ###
