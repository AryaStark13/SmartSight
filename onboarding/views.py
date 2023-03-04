from rest_framework import viewsets, permissions, generics
from rest_framework.response import Response
from knox.models import AuthToken
from rest_framework import permissions, viewsets
from rest_framework import generics
from rest_framework.response import Response
from .models import *
from .serializers import *


def get_ip_geolocation_data(ip_address):
    # not using the incoming IP address for testing
    print(ip_address)


class RegistrationAPI(generics.GenericAPIView):
    serializer_class = CreateUserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })


class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginUserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(
            data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        token = self.request.POST.get('token')

        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })


class UserAPI(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user


class CreateProfile(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get_object(self):
        return self.request.user


class ProfileDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

    def retrieve(self, request, pk=None):
        like = Profile.objects.filter(user_id=pk)
        data = ProfileSerializer(like, many=True)
        return Response(data.data)

    def get_object(self):
        return self.request.user


class CreatePost(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = PostSerializer
    queryset = Post.objects.all()

    def create(self, request, *args, **kwargs):
        source = self.request.data.get('source')
        post_user = self.request.data.get('post_user')
        title = self.request.data.get('title')
        description = self.request.data.get('description')
        content = self.request.data.get('content')
        images = self.request.FILES.get('images')
        url = self.request.data.get('url')
        # new_badwords = list(badwords)
        # x = [x.lower() for x in new_badwords]
        # print(x)

        # for i in description.split(' '):
        #     print(i)

        #     if i in x:
        #         response_dict = {"Hate Speech Detected": "This text has content with hate "+i}
        #         return Response(response_dict)
        #data = request.data
        # response = Detoxify('unbiased').predict(description)
        # ordered_toxicity_scores = sorted(response.items(),key = lambda x: x[1],reverse = True)
        # response_dict = {}
        # for i in ordered_toxicity_scores:
        #     if i[1] > 0.9:
        #         response_dict = {"Hate Speech Detected": "This text has {hate} content with {value}".format(hate=i[0],value = i[1]), "hate":True}
        #         return Response(response_dict)
        # profanity.load_censor_words(badwords)
        # description1 = profanity.censor(description)
        # description_new = description1

        # params = {
        #   'models': 'nudity-2.0',
        #   'api_user': '377537108',
        #   'api_secret': 'sxCd4WhwiGeF85jykwU8'
        # }
        # print(images)
        # files = {'media': open(images,'rb')}
        # r = requests.post('https://api.sightengine.com/1.0/check.json', files=files, data=params)
        # output = json.loads(r.text)
        # print(output)

        create = Post.objects.create(
            user_id=post_user, title=title, description=description, url=url, Image=images, content=content, source=source)

        create.save()
        serializer = PostSerializer(
            create, read_only=True, context={'request': request})
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        like = Post.objects.filter(pk=pk)
        data = PostSerializer(like, many=True)
        return Response(data.data)


class ProfilePosts(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = PostSerializer
    queryset = Post.objects.all()

    def retrieve(self, request, pk=None):
        like = Post.objects.filter(user_id=pk)
        data = PostSerializer(like, many=True)
        return Response(data.data)
