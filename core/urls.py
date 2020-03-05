from django.urls import path
from core.views import *
from core.popups import PedidoItemPopupCRUDViewSet

urlpatterns = [
    path('', pagina_inicial, name='pagina_inicial'),
    path('delivery/', pagina_delivery, name='pagina_delivery'),
    path('delivery/criar-pedido/', PedidoDeliveryCreateView.as_view(), name='criar_pedido_delivery'),
    path('delivery/pedidos/', listar_pedidos_delivery, name='listar_pedidos_delivery'),
    path('delivery/pedidos/editar/<int:pk>', PedidoDeliveryUpdateView.as_view(), name='editar_pedido_delivery'),
    path('delivery/pedidos/status/<int:id>', editar_status_delivery, name='editar_status_delivery'),
    path('delivery/pedidos/deletar/<int:id>', deletar_pedido_delivery, name='deletar_pedido_delivery'),

    PedidoItemPopupCRUDViewSet.urls(),
]